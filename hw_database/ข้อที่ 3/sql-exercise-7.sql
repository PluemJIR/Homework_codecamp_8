use boatrental;
select distinct s.sname from sailors S left join reserves R on S.sid = R.sid left join boats B on R.bid = B.bid where B.color = "red" or B.color = "green"; 