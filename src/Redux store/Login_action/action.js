import firebase from '../../Firebase configuration/fbConfig';

const Google_Login = (history) => {

    return (dispatch) => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                let create_user = {

                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid,
                    
                }
                firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
                    .then(() => {
                        dispatch({ type: "SETUSER", payload: create_user })
                        alert("login Sucessfully");

                    })



            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }

}



const Facebook_Login = (history) => {
    return (dispatch) => {

        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;

            let create_user = {

                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                uid: user.uid

            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
                .then(() => {
                    dispatch({ type: "SETUSER", payload: create_user })
                    alert("login Sucessfully")
                })

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
}


export {
    Google_Login,
    Facebook_Login,

}