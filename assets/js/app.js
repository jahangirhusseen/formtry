
let formData = document.getElementById('formData');
let datalist = document.getElementById('datalist');


formData.addEventListener('submit', function(e){

    e.preventDefault();

    let userinfo = new FormData(e.target);

    let userdata = Object.fromEntries(userinfo.entries());

    let { name , email } =  userdata;
 

    if (name == ''|| email == '') {
        alert('All Fields Are Required')
        
    }else{

        let udata = [];
        
        
        if (dataGet('key')) {
            udata = dataGet('key');
            // udata.push({

            //     name:name,
            //     email:email
            // })
           
        }
        console.log(typeof udata);

        dataSent('key',userdata);
        formData.reset();
    }

})




function dataSent(key, arr) {
    
    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
    return true;
};

/**
 * Data Get Form LS
 * @param {*} key 
 * @returns 
 */

function dataGet(key){
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false ;
}













// ---------------



// alldatauser();

// function alldatauser (){

//     let adata = dataGet('useralldata');

   

//     let alldata = '';

   


//     adata.map( (data,index) => {
//         let { name , email } =  data;

//         alldata += `
        
//         <tr>
//         <td>${ index + 1 }</td>
//         <td>${ name }</td>
//         <td>${ email }</td>
//         <td>
//             <button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button>
//             <button class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
//             <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
//         </td>
//     </tr>
        
//         `
//     })


//     datalist.innerHTML = alldata;
// }

// alldata();
// function alldata(){

//    let adata = dataGet('key');

//    let alldatalist = '';

//    adata.map((data,index) => {

//     let { name, email } = data;

//     alldatalist +=`
    
//     <tr>
//     <td>${ index + 1 }</td>
//     <td>${ name }</td>
//     <td>${ email }</td>
//     <td>
//         <button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button>
//         <button class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
//         <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
//     </td>
// </tr>
    
//     `
//    })

//    datalist.innerHTML = alldatalist;
// }

        // let dataarr;

    // (dataGet('key')) ? dataarr = dataGet('key') :  dataarr =[];
        
        // udata.push(userdata)

    //    let useralldata = [];

    //    if (dataGet('key')) {

    //     useralldata = dataGet('key');
           
    //    }

    //    let {name, email} = useralldata;

    //    useralldata.push({
    //        name:name,
    //        email:email
    //    })


        
        // alert('Data Stable')