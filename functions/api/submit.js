/**
 * POST /api/submit
 */
export async function onRequestPost({ env, request }) {

	let APIResponse, data

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
		const body = 
`Von: ${data.name || 'Unbekannt'} (${data.email || 'Nicht angegeben'})\n\n
Nachricht: \n
${data.message || "Leere Nachricht"} \n\n
-------------------\n
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
					"email": data.email || '',
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