import axios from 'axios'

const DRUG_BASE_REST_API_URL = 'http://localhost:9093/order';

class OrderService{

    getAllOrders(){
        return axios.get("http://localhost:9093/order/getall")
    }

    // createDrug(drug){
    //     return axios.post("http://localhost:9092/drugs/add", drug)
    // }

    // getDrugById(drugId){
    //     return axios.get("http://localhost:9092/drugs/list" + '/' + drugId);
    // }

    // updateDrug(drugId, drug){
    //     return axios.put("http://localhost:9092/drugs/update" + '/' +drugId, drug);
    // }

    // deleteDrug(drugId){
    //     return axios.delete("http://localhost:9092/drugs/delete" + '/' + drugId);
    // }
}

export default new OrderService();