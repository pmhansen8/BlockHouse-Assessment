from django.urls import path, include
from .views import line_chart, bar_chart, candle_chart, pie_chart


urlpatterns = [
    path('linechart/', line_chart),
path('barchart/', bar_chart),
path('piechart/', pie_chart),
path('candlechart/', candle_chart)
]
