from django.db import models

def upload_to(instance,filename):
    return "mutual_fund_logo/{filename}".format(filename = filename)

class FundGroup(models.Model):
    group_name  = models.CharField(max_length=255,null= True, blank= True)
    description = models.TextField()

class FundSubGroup(models.Model):
    sub_group_name = models.CharField(max_length=255,null=True,blank=True)
    fund_group     = models.ForeignKey(FundGroup,on_delete=models.CASCADE,related_name="fund_group")
    description    = models.TextField()

class MutualFund(models.Model):
    name                = models.CharField(max_length=255)
    fund_sub_group      = models.ForeignKey(FundSubGroup,null=True,on_delete=models.SET_NULL,related_name="fund_sub_group")
    logo                = models.ImageField(upload_to=upload_to,blank=True)
    desctription        = models.TextField()
    sip_enabled         = models.BooleanField(default= False)
    minimum_investment  = models.DecimalField(decimal_places=2,max_digits=100,default=0.0)
    total_unit          = models.IntegerField(default=0)




    