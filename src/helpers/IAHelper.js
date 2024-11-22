
const createDocumentIAApi = async (name, url) => {
    try {
      return await fetch('/ia/new-document', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          url
        }),
      });
    } catch (err) {
      console.log(err)
      console.error('An error occurred. Please try again.');
    }
}

const getAnswerApi = async (question) => {
  try {
    return await fetch('/ia/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        id:0
      }),
    });
  } catch (err) {
    console.log(err)
    console.error('An error occurred. Please try again.');
  }
}

const createResponse = (data) => {

  let response = data['answer'] + '\n Si quieres saber más, estos enlaces te pueden ayudar:';

  if (Array.isArray(data['documents']) && data['documents'].length > 0) {
    data['documents'].forEach(doc => {
      if (doc.link) { 
        response += '\n' + doc.link;  
      }
    });
  } else {
    response += '\nNo hay enlaces disponibles.';
  }

  return response;
}



export const createDocument = async(name, url) => {
    const response = await createDocumentIAApi(name, url);
    const data = await response.json()
    console.log(data)
    return response.ok ? true: false;
}

export const getAnswer = async(question) => {
    const response = await getAnswerApi(question);
    const data = await response.json()
    console.log(data)
    return response.ok ? createResponse(data): null;
}

