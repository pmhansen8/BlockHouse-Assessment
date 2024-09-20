from django.shortcuts import render
from rest_framework import viewsets
from .models import Candlestick, LineChartEntry, BarChartEntry, PieChartEntry
from .serializers import CandlestickSerializer, LineChartEntrySerializer, BarChartEntrySerializer, PieChartEntrySerializer
from django.http import JsonResponse
def line_chart(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return JsonResponse(data)
def pie_chart(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return JsonResponse(data)
def candle_chart(request):
    data = {"data": [

{"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},

{"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40}
    ]}
    return JsonResponse(data)
def bar_chart(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return JsonResponse(data)