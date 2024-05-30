import { NextRequest, NextResponse } from "next/server"
var { google } = require('googleapis');
var MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
var SCOPES = [MESSAGING_SCOPE];

function getAccessToken() {
    return new Promise(function (resolve, reject) {
        // var key = require('./keys.json');
        var jwtClient = new google.auth.JWT(
            process.env.NEXT_PUBLIC_CLIENT_EMAIL,//key.client_email,
            null,
            process.env.NEXT_PUBLIC_PRIVATE_KEY,//key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}

export async function GET(req, res) {
    let accessToken = await getAccessToken()
    return NextResponse.json({ token: accessToken }, { status: 201 })
}
