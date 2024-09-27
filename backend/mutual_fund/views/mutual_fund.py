from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from mutual_fund.models.mutual_fund import MutualFund
from mutual_fund.serializers.mutual_fund import MutualFundSerializer

class MutualFundView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        id = request.query_params.get("id",None)

        if id and  id.isnumeric():
            mutual_fund = MutualFund.objects.filter(id = id).order_by("-id")
        else:
            mutual_fund = MutualFund.objects.all().order_by("-id")

        serializer  = MutualFundSerializer(mutual_fund,many=True)
        data        = serializer.data

        return Response({
            "data":data
        },status= status.HTTP_200_OK)
