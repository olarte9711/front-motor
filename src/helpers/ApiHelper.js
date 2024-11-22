const apiValidate = async (email, password) => {
    try {
        return await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
      } catch (err) {
        console.log(err)
        console.error('An error occurred. Please try again.');
      }
}

const getUsersFromApi = async () => {
    try {
      return await fetch('/api/g_user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err)
      console.error('An error occurred. Please try again.');
    }
}

const getDocumentsFromApi = async () => {
  try {
    return await fetch('/api/repository', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log(err)
    console.error('An error occurred. Please try again.');
  }
}

const createUserApi = async (name, role, email, password) => {
    try {
      return await fetch('/api/g_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          rol: [
            role
          ]
        }),
      });
    } catch (err) {
      console.log(err)
      console.error('An error occurred. Please try again.');
    }
}

const deleteDocumentApi = async (id) => {
  try {
    
    return await fetch(`/api/repository?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al eliminar el documento:', error);
    throw error;
  }
};

const deleteUserApi = async (id) => {
  try {
    
    return await fetch(`/api/g_user?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
};


export const login = async (email, password) => {
    const response = await apiValidate(email, password); 
    const data = await response.json()
    console.log(data)
    console.log(response.ok)
    return response.ok ? (localStorage.setItem('authToken', data.token), data) : null;
} 

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const getUsers = async () => {
    const response = await getUsersFromApi();
    const data = await response.json()
    console.log(data)
    return response.ok ? data: null;
}

export const getDocuments = async () => {
  const response = await getDocumentsFromApi();
  const data = await response.json()
  console.log(data)
  return response.ok ? data: null;
}

export const createUser = async(name, role, email, password) => {
    const response = await createUserApi(name, role, email, password);
    const data = await response.json()
    console.log(data)
    return response.ok ? true: false;
}

export const deleteDocument = async( id ) => {
  const response = await deleteDocumentApi(id);
  const data = await response.json()
  console.log(data)
  return response.ok ? true: false;
}

export const deleteUser = async( id ) => {
  const response = await deleteUserApi(id);
  const data = await response.json()
  console.log(data)
  return response.ok ? true: false;
}