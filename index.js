'use strict'

exports.handler = async (word, event, context) => {
 word="Chennai";
 const sent="hello "+word;
 console.log(sent);
 return { statusCode: 200,body: sent };
};
exports.lambda_handler = async (event, context, callback) => {
    try 
{
	const word="India";
        const response = await exports.handler(word, event, context)
        callback(null, response);
    } catch (e) {
        console.error(e);
        callback(e, null);
    }
};
