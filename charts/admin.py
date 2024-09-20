from django.contrib import admin
from .models import Candlestick, LineChart, LineChartEntry, BarChart, BarChartEntry, PieChart, PieChartEntry

@admin.register(Candlestick)
class CandlestickAdmin(admin.ModelAdmin):
    list_display = ('date', 'open', 'high', 'low', 'close')

@admin.register(LineChart)
class LineChartAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(LineChartEntry)
class LineChartEntryAdmin(admin.ModelAdmin):
    list_display = ('chart', 'label', 'value')

@admin.register(BarChart)
class BarChartAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(BarChartEntry)
class BarChartEntryAdmin(admin.ModelAdmin):
    list_display = ('chart', 'label', 'value')

@admin.register(PieChart)
class PieChartAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(PieChartEntry)
class PieChartEntryAdmin(admin.ModelAdmin):
    list_display = ('chart', 'label', 'value')
