from PhDateTime import PhDateTime

print (PhDateTime.get_local_timezone_name())
print(PhDateTime.epoch())
#print(PhDateTime.now())
#print(PhDateTime.hour(PhDateTime.now()))
#print(PhDateTime.minute(PhDateTime.now()))
#print(PhDateTime.second(PhDateTime.now()))
#print(PhDateTime.day(PhDateTime.now()))
#print(PhDateTime.month(PhDateTime.now()))
#print(PhDateTime.year(PhDateTime.now()))

print(PhDateTime.has_dst_effect())


print (PhDateTime.epoch_to_local_time(1502684545))
