use boatrental;
select distinct s.sname from sailors S left join reserves R on S.sid = R.sid where bid is not null;