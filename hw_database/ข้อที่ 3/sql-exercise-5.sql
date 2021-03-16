use boatrental;
select distinct B.color from sailors S left join reserves R on S.sid = R.sid left join boats B on R.bid = B.bid where s.sname = "Lubber"; 