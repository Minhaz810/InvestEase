from rest_framework import serializers
from mutual_fund.models.mutual_fund import MutualFund,FundGroup,FundSubGroup

class FundGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model  = FundGroup
        fields = '__all__'

class FundSubGroupSerializer(serializers.ModelSerializer):
    fund_group = FundGroupSerializer(read_only=True)

    class Meta:
        model  = FundSubGroup
        fields =['sub_group_name','fund_group','description']

class MutualFundSerializer(serializers.ModelSerializer):
    fund_sub_group = FundSubGroupSerializer(read_only = True)

    class Meta:
        model  = MutualFund
        fields = ['id','name','logo','minimum_investment','sip_enabled','total_unit','fund_sub_group']