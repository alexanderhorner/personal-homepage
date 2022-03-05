/**
 * POST /api/submit
 */
export async function onRequestPost({ env, request }) {
	try {
		let input = await request.formData()
		let pretty = JSON.stringify([...input], null, 2)
	} catch (error) {
		return new Response(`Error parsing JSON content: ${error}`, { status: 400 })
	}

	try {
		let response = await fetch('https://api.sendgrid.com/v3/mail/send', {
			body: JSON.stringify({
				"personalizations":[
					{
						"to":[
							{
								"email":"mail@alexanderhorner.com"
							}
						],
						"subject":"Hello, World!"
					}
				],
				"content":[
					{
						"type":"text/plain",
						"value":"Heya!"
					}
				],
				"from":{
					"email":"mail@alexanderhorner.com"
				},
				"reply_to":{
					"email":"sam@smith.com",
					"name":"Sam Smith"
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

	return new Response({ ...pretty, ...response }, {
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	})
	
}