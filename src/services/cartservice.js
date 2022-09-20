import axios from 'axios'


class   CartService{

    // getAllDrugs(){
    //     return axios.get("http://localhost:9093/cart/add",userId)
    // }

    addCart(userId){
        return axios.post("http://localhost:9093/cart/add"+"/"+userId)
    }

    getCartById(userId){
        return axios.get("http://localhost:9093/cart" + '/' + userId);
    }

    updateDrug(drugId, drug){
        return axios.put("http://localhost:9092/drugs/update" + '/' +drugId, drug);
    }

    deleteDrug(drugId){
        return axios.delete("http://localhost:9092/drugs/delete" + '/' + drugId);
    }
}

export default new CartService();