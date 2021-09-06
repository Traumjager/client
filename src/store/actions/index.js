export const handleSignUp = (user) => {
    console.log(user,'ssssssssssssssssss')
    return {
      type: 'SIGN_UP',
      payload: user,
    };
};