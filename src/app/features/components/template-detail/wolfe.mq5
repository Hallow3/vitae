// This source code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © brayant mohamed waffo

//@version=5
indicator("Wolfe Wave Pattern Pro", overlay=true)

// Input parameters with optimized defaults
lookbackPeriod = input.int(50, "Lookback Period", minval=20, maxval=500)
minSwingSize = input.float(0.8, "Minimum Swing Size (%)", minval=0.1, step=0.1)
maxTimeDiff = input.int(30, "Maximum Time Between Points", minval=5)
patternColor = input.color(color.blue, "Pattern Lines Color")
labelSize = input.string("small", "Label Size", options=["tiny", "small", "normal", "large"])
showPotentialPatterns = input.bool(true, "Show Potential Patterns")

// Enhanced Swing High/Low detection with dynamic lookback
swh = ta.pivothigh(high, lookbackPeriod/10, lookbackPeriod/10)
swl = ta.pivotlow(low, lookbackPeriod/10, lookbackPeriod/10)

// Arrays to store points with maximum size limit
var float[] highs = array.new_float(5)
var float[] lows = array.new_float(5)
var int[] highTimes = array.new_int(5)
var int[] lowTimes = array.new_int(5)
var float riskRatio = 0.0

// Store swing points with volatility filter
float atr = ta.atr(14)
if not na(swh) and (array.size(highs) == 0 or math.abs(swh - array.get(highs, 0)) > atr)
    if array.size(highs) >= 5
        array.pop(highs)
        array.pop(highTimes)
    array.unshift(highs, swh)
    array.unshift(highTimes, bar_index[lookbackPeriod/10])

if not na(swl) and (array.size(lows) == 0 or math.abs(swl - array.get(lows, 0)) > atr)
    if array.size(lows) >= 5
        array.pop(lows)
        array.pop(lowTimes)
    array.unshift(lows, swl)
    array.unshift(lowTimes, bar_index[lookbackPeriod/10])

// Enhanced Wolfe Wave Pattern Detection Function
isWolfeWave(float[] points, int[] times) =>
    bool valid = false
    if array.size(points) >= 5 and array.size(times) >= 5
        p5 = array.get(points, 0)
        p4 = array.get(points, 1)
        p3 = array.get(points, 2)
        p2 = array.get(points, 3)
        p1 = array.get(points, 4)
        
        t5 = array.get(times, 0)
        t4 = array.get(times, 1)
        t3 = array.get(times, 2)
        t2 = array.get(times, 3)
        t1 = array.get(times, 4)

        // Enhanced time progression check
        timeValid = (t2 > t1) and (t3 > t2) and (t4 > t3) and (t5 > t4)
        
        // Improved price pattern rules
        rule1 = p1 < p3 and p3 < p5  // Ascending lows
        rule2 = p2 > p4              // Descending highs
        rule3 = (p4 - p3) / (p2 - p1) >= 0.5 and (p4 - p3) / (p2 - p1) <= 1.618  // Enhanced Fibonacci relationship
        rule4 = math.abs(t5 - t1) <= maxTimeDiff  // Time constraint
        rule5 = math.abs(p5 - p1) / p1 * 100 >= minSwingSize  // Minimum pattern size
        rule6 = math.abs(p2 - p4) / math.abs(p1 - p3) >= 0.382  // Additional harmonic validation

        valid := timeValid and rule1 and rule2 and rule3 and rule4 and rule5 and rule6
    valid

// Detect patterns in historical data
for i = 0 to lookbackPeriod - 1
    if array.size(highs) >= 3 and array.size(lows) >= 2
        if isWolfeWave(array.concat(lows, highs), array.concat(lowTimes, highTimes))
            p5 = array.get(lows, 0)
            p4 = array.get(highs, 0)
            p3 = array.get(lows, 1)
            p2 = array.get(highs, 1)
            p1 = array.get(lows, 2)
            
            t5 = array.get(lowTimes, 0)
            t4 = array.get(highTimes, 0)
            t3 = array.get(lowTimes, 1)
            t2 = array.get(highTimes, 1)
            t1 = array.get(lowTimes, 2)

            // Risk calculation
            riskRatio := math.abs(p5 - p4) / math.abs(p4 - p3)
            isGoodRisk = riskRatio >= 1.5

            // Draw pattern with risk-based color
            patternColorRisk = isGoodRisk ? color.green : color.yellow
            
            // Add enhanced labels for historical patterns
            label.new(t1, p1, "1", color=color.new(patternColorRisk, 70), style=label.style_circle, size=labelSize)
            label.new(t2, p2, "2", color=color.new(patternColorRisk, 70), style=label.style_circle, size=labelSize)
            label.new(t3, p3, "3", color=color.new(patternColorRisk, 70), style=label.style_circle, size=labelSize)
            label.new(t4, p4, "4", color=color.new(patternColorRisk, 70), style=label.style_circle, size=labelSize)
            label.new(t5, p5, "5", color=color.new(patternColorRisk, 70), style=label.style_circle, size=labelSize)

            // Add detailed pattern information
            riskText = isGoodRisk ? "High Probability" : "Monitor Risk"
            label.new(bar_index, na, "Wolfe Wave: " + riskText, color=patternColorRisk, style=label.style_label_down, size=labelSize)

    else if showPotentialPatterns
        // Enhanced potential pattern detection
        if array.size(highs) >= 3 and array.size(lows) >= 2
            p4 = array.get(highs, 0)
            p3 = array.get(lows, 1)
            potentialRatio = math.abs(p4 - p3) / ta.atr(14)
            if potentialRatio > 1.5
                label.new(bar_index, na, "Potential Pattern Forming", color=color.orange, style=label.style_label_down, size=labelSize)

// Enhanced alert conditions with risk assessment
alertcondition(isWolfeWave(array.concat(lows, highs), array.concat(lowTimes, highTimes)) and riskRatio >= 1.5, "High Probability Wolfe Wave", "Strong Wolfe Wave Pattern Detected - Consider Trading Opportunity") 