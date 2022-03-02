/**
 * POST /api/submit
 */
export async function onRequestPost(context) {
	try {
		let input = await context.request.formData();
		let pretty = JSON.stringify([...input], null, 2);
	} catch (err) {
		return new Response('Error parsing JSON content', { status: 400 });
	}

	return await fetch('https://api.sendgrid.com/v3/mail/send', {
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
		'Authorization': `Bearer ${SENDGRID_API_KEY}`,
		'Content-Type': 'application/json',
		},
		method: 'POST',
	})
}