const config = require('./dbconfig'); 
const sql = require('mssql'); 

const getPackages = async() => { 
    try { 
        let pool = await sql.connect(config); 
        let thesePackages = await pool.request().query( 
            "SELECT * FROM PACKAGES" ); 
        return thesePackages.recordset; 
    } 
    catch(error) { 
        console.log("DATABASE CONNECTION EROR IN Error Posted Next Line"); 
        console.log(error); 
    } 
}
const getPackagesDetail = async() => { 
    try { 
        let pool = await sql.connect(config); 
        let thesePackages = await pool.request().query( 
            "SELECT * FROM PACKAGEDETAIL" ); 
        return thesePackages.recordset; 
    } 
    catch(error) { 
        console.log("DATABASE CONNECTION EROR IN Error Posted Next Line"); 
        console.log(error); 
    } 
}  
module.exports = {getPackages, getPackagesDetail}
