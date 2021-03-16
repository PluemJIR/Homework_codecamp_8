use boatrental;
select sname from sailors S where s.age = (select max(age) from sailors S)

