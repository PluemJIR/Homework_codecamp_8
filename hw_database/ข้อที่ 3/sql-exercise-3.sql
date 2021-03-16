use boatrental;
select distinct R.sid from reserves R left join boats B on R.bid = B.bid where B.color = "red"; 