use banking;
select A.account_number from account A left join branch B on A.branch_name = B.branch_name where branch_city = "Riverside"; 

