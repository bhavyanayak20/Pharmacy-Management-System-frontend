import axios from 'axios'

const supplier_BASE_REST_API_URL = 'http://localhost:9092/supplier';

class Supplierservice{

    getAllSuppliers(){
        return axios.get("http://localhost:9092/supplier/list")
    }

    createSupplier(supplier){
        return axios.post("http://localhost:9092/supplier/add", supplier)
    }

    getSupplierById(supplierId){
        return axios.get("http://localhost:9092/supplier/list" + '/' + supplierId);
    }

    updateSupplier(supplierId, supplier){
        return axios.put("http://localhost:9092/supplier/update" + '/' +supplierId, supplier);
    }

    deletesupplier(supplierId){
        return axios.delete("http://localhost:9092/supplier/delete" + '/' + supplierId);
    }
}

export default new Supplierservice();