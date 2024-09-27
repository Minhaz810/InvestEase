from django.urls import path
from mutual_fund.views.mutual_fund import MutualFundView

urlpatterns = [
    path("mutual-fund-list", view=MutualFundView.as_view(), name="mutual-fund-list")
]