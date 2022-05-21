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
		return new Response(`Error parsing input: ${error}`, { status: 400 })
	}


	// Captcha verification
	try {
		const apiRoute = `https://www.google.com/recaptcha/api/siteverify?secret=${env.CAPTCHA_PRIVATE_KEY}&response=${data['g-recaptcha-response']}`
		captchaResponse = await fetch(apiRoute)
		captchaResponse = await response.json()
	} catch (error) {
		return new Response(`Error verifying captcha: ${error}`, { status: 400 })
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
		return new Response(`Error sending email: ${error}`, { status: 400 })
	}

	let response = {
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