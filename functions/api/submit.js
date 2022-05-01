/**
 * POST /api/submit
 */
export async function onRequestPost({ env, request }) {

	let APIResponse, data, captchaAsessment

	try {
		let formData = await request.formData()
		let pretty = JSON.stringify([...formData], null, 2)

		data = {}
		for(var pair of formData.entries()) {
			data[pair[0]] = pair[1];
		}
	} catch (error) {
		return new Response(`Error parsing input: ${error}`, { status: 400 })
	}

	try {
		captchaAsessment = await createCaptchaAsessment('f917f6c763daf31e01f0cc18785abfe95b8e5ba9', data.googlecaptchaSiteKey, data.googlecaptchaToken)
	} catch (error) {
		return new Response(`Error creating captcha assessment: ${error}`, { status: 400 })
	}

	try {
		const body = 
`Von: ${data.name || 'Unbekannt'} (${data.email || 'Nicht angegeben'})

Vertrauenswürdigkeit: ${JSON.stringify(captchaAsessment)}

Nachricht:
${data.message || "Leere Nachricht"}
`


		APIResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
			body: JSON.stringify({
				"personalizations":[
					{
						"to":[
							{
								"email":"mail@alexanderhorner.com"
							}
						],
						"subject":"Homepage Contact form"
					}
				],
				"content":[
					{
						"type":"text/plain",
						"value": body
					}
				],
				"from":{
					"email":"mail@alexanderhorner.com"
				},
				"reply_to":{
					"email": data.email || 'N/A',
					"name": data.name || 'Kein Name'
				}
			}),
			headers: {
			'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
			'Content-Type': 'application/json',
			},
			method: 'POST',
		})
	} catch (error) {
		return new Response(`Error sending email: ${error}`, { status: 400 })
	}

	let response = {
		input: data,
		APIResponse
	}

	let prettyResponse =  JSON.stringify(response)

	return new Response(
		prettyResponse,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		}
	)
	
}

async function createCaptchaAsessment(GCloudProjectID, recaptchaSiteKey, recaptchaToken) {
	const {RecaptchaEnterpriseServiceClient} = require('@google-cloud/recaptcha-enterprise');

	/**
	 * Create an assessment to analyze the risk of an UI action. Note that
	 * this example does set error boundaries and returns `null` for
	 * exceptions.
	 *
	 * projectID: GCloud Project ID
	 * recaptchaSiteKey: Site key obtained by registering a domain/app to use recaptcha services.
	 * token: The token obtained from the client on passing the recaptchaSiteKey.
	 * recaptchaAction: Action name corresponding to the token.
	 */
	async function createAssessment({
		projectID = GCloudProjectID,
		recaptchaSiteKey = recaptchaSiteKey,
		token = recaptchaToken,
		recaptchaAction = "form-submit",
	}) {
		// Create the reCAPTCHA client & set the project path. There are multiple
		// ways to authenticate your client. For more information see:
		// https://cloud.google.com/docs/authentication
		// TODO: To avoid memory issues, move this client generation outside
		// of this example, and cache it (recommended) or call client.close()
		// before exiting this method.
		const client = new RecaptchaEnterpriseServiceClient();
		const projectPath = client.projectPath(projectID);

		// Build the assessment request.
		const request = ({
			assessment: {
				event: {
					token: token,
					siteKey: recaptchaSiteKey,
				},
			},
			parent: projectPath,
		});

		// client.createAssessment() can return a Promise or take a Callback
		const [ response ] = await client.createAssessment(request);

		// Check if the token is valid.
		if (!response.tokenProperties.valid) {
			throw `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
		}

		// Check if the expected action was executed.
		// The `action` property is set by user client in the
		// grecaptcha.enterprise.execute() method.
		if (response.tokenProperties.action === recaptchaAction) {

			// Get the risk score and the reason(s).
			// For more information on interpreting the assessment,
			// see: https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
			let returnObject = {
				score: 0,
				reasons: []
			}

			returnObject.score = response.riskAnalysis.score

			response.riskAnalysis.reasons.forEach((reason) => {
				returnObject.reasons.append(reason);
			});
			
			return returnObject;
		} else {
			throw "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
		}
   }
}