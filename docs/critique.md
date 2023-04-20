# Data Visualization Design Critique

In 2020, the scientific publication [Our World in Data](https://ourworldindata.org/) partnered with the YouTube channel [Kurzgesagt](https://www.youtube.com/@kurzgesagt) to make a video about the world's CO2 emissions (shown below). All of the data and research used in that video was then provided as a write up in Our World in Data[^1], which is the subject of this review.

<div class="d-flex justify-content-center">
    <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/ipVxxxqwBQw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
</div>

## Table of Contents

## Purpose

The purpose of this report and accompanying visualizations is to provide some visibility into the production of CO2, the primary driver of global climate change. To support this purpose, the article breaks down CO2 generation into a number of visualizations, including **Global CO2 emission from fossil fuels**, **Per capita CO2 emissions**, and **Decoupling CO2 emissions from economic growth**.

## The Data

All data for the report is made available on their [GitHub Repository](https://github.com/owid/co2-data). The data itself is a conglomeration of several other sources, including:

* Statistical Review of World Energy (BP)
* International Energy Data (US Energy Information Administration)
* Global Carbon Budget (Global Carbon Project)
* Greenhouse Gas Emissions by sector (Climate Watch)

The website provides well over a dozen separate visualizations provided different views into the realm of CO2 emissions, so for simplicity we'll focus on the first: **Global CO2 Emissions from Fossil Fuels**.

This visualization shows annual CO2 emissions over time, starting in 1750. You can select which countries, regions, or continents are shown on the chart. By default, it shows the entire world's annual CO2 emissions.

<div class="d-flex justify-content-center mb-4">
    <img src="/co2_emissions_world.png"/>
</div>

You could also edit it to show emissions by continent:

<div class="d-flex justify-content-center mb-4">
    <img src="/co2_emissions_continents.png"/>
</div>

## The Users

These visualizations were made for people who are curious about the sources of CO2 emissions. It's for people who want to ask who pollutes the most, who _has_ polluted the most, and what is the trend in CO2 emissions in different regions.

The best way to see where the most pollution in the world is coming from is by switching to the **Map** mode from the default **Chart** mode. This reveals a color-coded map of the world where darker red represents higher annual emissions (from the most recent year).

<div class="d-flex justify-content-center mb-4">
    <img src="/co2_emissions_map.png"/>
</div>

You can adjust the slider to show the same visualization, but with annual emissions data from the specified year. For example, the following figure shows data from 1925.

<div class="d-flex justify-content-center mb-4">
    <img src="/co2_emissions_1925.png"/>
</div>

You can also hover over a country to show a quick popup chart of their historical emission trend.

<div class="d-flex justify-content-center mb-4">
    <img src="/co2_emissions_china.png"/>
</div>

Users could then use the general insights they gained from the map view to dig into more detail and compare historical trends in the chart view. The map view seems to indicate the top polluters include China, India, United States, Japan, Russia, Iran, and Germany. We could then go back to the map view and add those countries to the visualization.

<div class="d-flex justify-content-center mb-4">
    <div class="d-flex flex-column">
        <div class="d-flex justify-content-center">
            <img class="m-2" src="/add_country.png"/>
        </div>
        <img class="m-2" src="/choose_data.png"/>
        <img class="m-2" src="/choose_data_india.png"/>
    </div>
</div>

The result:

<div class="d-flex justify-content-center mb-4">
    <img src="/top_6.png"/>
</div>

If we don't care about the low levels at the beginning of the timeline, we can simply adjust the brush at the bottom:

<div class="d-flex justify-content-center mb-4">
    <img src="/top_6_brush.png"/>
</div>

## Insights

The above exploration can result in several insights. Firstly, China is by far and away the largest emitter of CO2, and has increased its emissions at an unprecedented rate in the past 20 years alone. This is a result of continued rapid industrialization and other countries moving production to China.

We can also see that Russia peaked its emissions in 1991, which then saw a sharp decrease after the fall of the Soviet Union. It may require more looking into the data sources to know if some of this was caused by emissions starting to be assigned to successor states, but the decrease in industrial work is apparent.

Another trend can be observed in countries often labeled as post-industrial or with more "modern" economies. The United States, Germany, and Japan had their peak emissions in the 20th century or shortly into the 2000s and have since declined, while other countries are increasing the emissions year-over-year. This is often attributed to more highly developed countries not needing to rely on fossil fuels as much and instead switching to more efficient means of production, while developing countries exploit cheaper, dirtier methods of energy production and industry. This can certainly be seen in the production-oriented economy of China, where other countries often outsource production jobs due to cheaper labor.

## Design Choices

Several aspects of this design are incredibly well thought out and easy to use:

* Being able to switch between the chart and map views helps users explore the data set in both geographical and chronological ways
* The hover popups help introspect more about the data in both views
* The color scale on the map mode is intuitive going from white (zero emissions) to darker red (high emissions)
* Being able to switch to different regions in the map view helps narrow down the data you're looking at
* Providing both countries, continents, regions, and economic/government unions as options in the chart view allow for more inspection
* The ability to change the chart view to show relative changes instead of absolute emission values provides for viewing smaller sections of the timeline, or countries with vastly different absolute emissions
* Changing the chart to log mode instead of linear can make the data more readable over the larger timespan or if more countries are in the view
* Adding countries/regions is easy, with search field and multi-checkboxes for adding and removing options

Even with all these positives, and I think this is an overall excellent data visualization, there are some limitations:

* This visualization shows absolute CO2 emissions, so it can be hard to compare countries with vastly different populations
  * There are other, per capita visualizations on the same page that solve this
* This page only uses CO2 emissions data from fossil fuels, so it isn't showing every source of CO2, let alone other greenhouse gases and contributors to global climate change, which some users may mistake it for
* This data only gets as granular as states/countries, so can't be used to analyze emissions from smaller jurisdictions

Some other things could be directly improved with this visualization:

* It isn't obvious, but when you hover over the bold text in the accompanying paragraphs, it will reset all filters back to the world chart to highlight specific points in time. This was quite annoying after putting in several countries to analyze followed by my mouse slipping over to the paragraph.
  * Perhaps this could be changed from a hover trigger to a click trigger

<div class="d-flex justify-content-center mb-2">
    <img class="border border-danger border-4" src="/hover.png"/>
</div>

* Some users may unknowingly filter to countries AND economic/governmental unions that contain that country, which could be confusing
  * For example, you could show Germany, Russia, France, the United Kingdom, and the European Union, and be quite confused about which makes up which

<div class="d-flex justify-content-center mb-2">
    <img class="border border-danger border-4" src="/eu.png"/>
</div>

* Using log mode with multiple countries on the chart can make comparison confusing, since people don't often have a good intuition in the exponential domain

## Sources

<style>
/*Remove automatically generated "Footnote" heading*/
.footnotes>h2 { display: none; }
</style>
[^1]: Hannah Ritchie, Max Roser and Pablo Rosado (2020) - "CO₂ and Greenhouse Gas Emissions". Published online at OurWorldInData.org. Retrieved from: 'https://ourworldindata.org/co2-and-greenhouse-gas-emissions' [Online Resource]
