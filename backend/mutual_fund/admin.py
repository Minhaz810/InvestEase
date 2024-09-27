from django.contrib import admin
from mutual_fund.models.mutual_fund import MutualFund,FundGroup,FundSubGroup

class MutualFundAdmin(admin.ModelAdmin):
    list_display = ('name','fund_sub_group','sip_enabled','minimum_investment','total_unit')

class FundSubGroupAdmin(admin.ModelAdmin):
    list_display = ('sub_group_name','fund_group')

class FundGroupAdmin(admin.ModelAdmin):
    list_display = ('group_name',)

admin.site.register(FundGroup,FundGroupAdmin)
admin.site.register(FundSubGroup,FundSubGroupAdmin)
admin.site.register(MutualFund,MutualFundAdmin)