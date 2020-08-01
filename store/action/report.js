export const DELETE_REPORT = 'DELETE_REPORT';
export const CREATE_REPORT_PAGE_TWO = 'CREATE_REPORT_PAGE_TWO';
export const CREATE_REPORT_PAGE_ONE = 'CREATE_REPORT_PAGE_ONE';
export const CREATE_REPORT_IMAGE = 'CREATE_REPORT_IMAGE';
export const CREATE_REPORT = 'CREATE_REPORT';
export const CREATE_REPORT_ERROR = 'CREATE_REPORT_ERROR';
export const CREATE_REPORT_LOCATION = 'CREATE_REPORT_LOCATION'


export const infoImage = image=>{
    return{type :CREATE_REPORT_IMAGE ,data : image}
}

export const infoLocation = (location)=>{
    return{type :CREATE_REPORT_LOCATION ,data :{location}}
}
export const infoPageOne = (name , place ,date )=>{
    return{type :CREATE_REPORT_PAGE_ONE ,data : {
        name,
        place,
        date
       
    }}
}
export const infoPageTwo = (info5,info6)=>{
    return{type :CREATE_REPORT_PAGE_TWO ,data :{
        info5,
        info6
    }}
}
export const deleteReport = reportID =>{
    return {type : DELETE_REPORT , rid: reportID};
};

 export const createReport = (data)=>{
    return ( dispatch , {getFirestore}) => {
        
        const firestore=getFirestore();
        firestore.collection('test').add({
         ...data
         
        }).then(() =>{
            dispatch({type: 'CREATE_REPORT' , data:data})
        }).catch((err)=>{
dispatch({type:'CREATE_REPORT_ERROR' , err})
        })
      
        
}}