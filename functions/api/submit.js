/**
 * POST /api/submit
 */
export async function onRequestPost({ env, request }) {

	let APIResponse, data, captchaResponse

	try {
		let formData = await request.formData()

		data = {}
		for(var pair of formData.entries()) {
			data[pair[0]] = pair[1];
		}
	} catch (error) {
		let responseObj = {
			status: 'error',
			message: `Error parsing input: ${error}`
		}
		return new Response(
			JSON.stringify(responseObj),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
			}
		)
	}


	// Captcha verification
	try {
		const apiRoute = `https://www.google.com/recaptcha/api/siteverify?secret=${env.CAPTCHA_PRIVATE_KEY}&response=${data['g-recaptcha-response']}`
		captchaResponse = await fetch(apiRoute)
		captchaResponse = await captchaResponse.json()
		if (captchaResponse.success === false) {
			throw `Capture wrong (${captchaResponse["error-codes"][0]})`
		}
	} catch (error) {
		let responseObj = {
			status: 'error',
			message: `Error verifying captcha: ${error}`
		}
		return new Response(
			JSON.stringify(responseObj),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
			}
		)
	}
	


	try {
		const body = 
`Von: ${data.name || 'Unbekannt'} (${data.email || 'Nicht angegeben'})

Captcha Response: 

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
		let responseObj = {
			status: 'error',
			message: `Error sending email: ${error}`
		}
		return new Response(
			JSON.stringify(responseObj),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
			}
		)
	}

	let response = {
		status: 'success',
		input: data,
		captchaResponse,
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