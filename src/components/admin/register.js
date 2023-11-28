import { API_USERS } from "@/constant";
import axios from "axios";

export const userRegister = {
    name: '',
    phone: '',
    address: 'null',
    email: '',
    password: ''
}
export async function checkPhone(phone) {
    let err = ''
    await axios.get(API_USERS)
        .then((result) => {
            result.data.forEach(user => {
                if(user.phone == phone) {
                    err = 'số điện thoại đã tồn tại';
                } 
            });
        })
        return err;
    }

export async function checkAddress(id) {
    const {data} = await axios.get(API_USERS+'/'+id);
    console.log('data.address type :>> ',data.address);
        if(data.address == 'null' || data.address == '') {
            return false;
        }
        return true;
    }