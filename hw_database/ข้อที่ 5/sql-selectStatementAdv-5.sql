use banking;
select customer_name,sum(balance) from depositor D left join account A on D.account_number = A.account_number group by d.customer_name having count(*) > 1 order by sum(balance) desc;