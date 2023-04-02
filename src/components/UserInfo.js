class UserInfo {
    constructor({nameProfil, profilText, profilAvatar}){
        this._nameProfil = document.querySelector(nameProfil);
        this._jobText = document.querySelector(profilText);
        this._avatar = document.querySelector(profilAvatar)
    }

    getUserInfo(){
        const objectDataProfil = {
        nameProfil: this._nameProfil.textContent,
        nameJob: this._jobText.textContent,
        }
        return objectDataProfil;
    }
    
    setUserInfo(profil){
        this._nameProfil.textContent = profil.name;
        this._jobText.textContent = profil.about;
    }

    setUserAvatar({avatar}) {
        this._avatar.src = avatar
    }
    
}
export {UserInfo}