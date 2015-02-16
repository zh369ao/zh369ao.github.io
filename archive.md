---
layout: page
title: archive
permalink: /archive/
---

<ul class="archive">
	{% for post in site.posts %}
    {% capture y %}
    {{post.date | date:"%Y"}}
    {% endcapture %}
    {% if year != y %}
        {% assign year = y %}
            <li class="year">{{ y }}</li>
        {% endif %}
		<li>{{ post.date | date:'%Y-%m-%d' }} » <a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endfor %}
</ul>