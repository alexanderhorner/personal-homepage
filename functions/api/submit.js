/**
 * POST /api/submit
 */
 export async function onRequestPost(context) {
    try {
        let input = await context.request.formData();
        let pretty = JSON.stringify([...input], null, 2);
        // return new Response(pretty, {
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //     },
        // });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }

    await fetch('https://api.sendgrid.com/v3/mail/send', {
        body: JSON.stringify({
        'from': {
            'email': '', // add your email here
        },
        'personalizations': [
            {
            'to': [
                {
                    'email': 'mail@alexanderhorner.com',
                },
            ]
            },
        ]
        }),
        headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
        },
        method: 'POST',
    })
  }