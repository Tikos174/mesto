class UserInfo {
    constructor({nameProfil, profilText}){
        this._nameProfil = document.querySelector(nameProfil);
        this._jobText = document.querySelector(profilText);
    }

    getUserInfo(){
        const objectDataProfil = {
        nameProfil: this._nameProfil.textContent,
        nameJob: this._jobText.textContent
        }

        return objectDataProfil;
    }
    
    setUserInfo({prof, job}){
        this._nameProfil.textContent = prof;
        this._jobText.textContent = job;
    }
}
export {UserInfo}