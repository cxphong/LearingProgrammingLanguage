from datetime import datetime
import time
from time import gmtime, strftime
import maya
import pendulum


# pip3 install maya pendulum
class PhDateTime:

    @staticmethod
    def now():
        return datetime.now()

    @staticmethod
    def epoch():
        return int(time.time())

    @staticmethod
    def epoch_to_time(timezone=None):
        if timezone is None:
            return time.localtime(epoch)
        else:
            local = pendulum.create(2016, 8, 7, 22, 24, 30, tz='Europe/Paris')
            '2016-08-07T22:24:30+02:00'
            in_paris.in_timezone('America/New_York')



    @staticmethod
    def get_local_timezone_name():
        print (time.localtime().tm_isdst)
        return maya.get_localzone()

    @staticmethod
    def has_dst_effect():
        return time.localtime().tm_isdst
