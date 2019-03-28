SELECT * FROM airplanes
WHERE passenger_count > $1;
-- $1 refers to ('db').get_planes([25])
