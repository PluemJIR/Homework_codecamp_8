use boatrental;
select distinct S.sname from sailors S left join reserves R on s.sid = R.sid where R.bid = 103;