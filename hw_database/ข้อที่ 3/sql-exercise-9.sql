use boatrental;
select distinct sname from sailors S where s.sid in
(select distinct s.sid from sailors S left join reserves R on S.sid = R.sid left join boats B on R.bid = B.bid where B.color = "red") 
and s.sid not in
(select distinct s.sid from sailors S left join reserves R on S.sid = R.sid left join boats B on R.bid = B.bid where B.color = "green") 