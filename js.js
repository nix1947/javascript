// Eight data types. 

/* 
1. undefined
2. null
3. boolean 
4. number 
5. string 
6. symbol
7. object 
8. bigInt

*/


/* Postgres 

-- Check for UUID plugin 
> SELECT * FROM pg_available_extensions; 

-- Installing uuid-ossp plugin 
> create extension uuid-ossp if not exists; 

-- Generate uuid for column, uuid_generate_v1() function is available
> uuid_generate_v1()


*/


/* Excel insert query
insert into tablename(title, description, created_date) values(' "&A1&" ', ' "&A2" ', '2010-5-12')
*/
