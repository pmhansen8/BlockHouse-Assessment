from rest_framework import serializers
from .models import Candlestick, LineChartEntry, BarChartEntry, PieChartEntry

class CandlestickSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candlestick
        fields = ['date', 'open', 'high', 'low', 'close']

class LineChartEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LineChartEntry
        fields = ['label', 'value']

class BarChartEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = BarChartEntry
        fields = ['label', 'value']

class PieChartEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = PieChartEntry
        fields = ['label', 'value']
