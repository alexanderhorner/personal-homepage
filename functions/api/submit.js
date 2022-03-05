/**
 * POST /api/submit
 */
export async function onRequestPost({ env, request }) {

	let pretty, APIResponse

	try {
		let input = await request.formData()
		pretty = JSON.stringify([...input], null, 2)
	} catch (error) {
		return new Response(`Error parsing JSON content: ${error}`, { status: 400 })
	}

	try {
		APIResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
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

	let response = {
		input: pretty,
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