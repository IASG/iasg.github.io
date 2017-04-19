---
layout: post
title:  "Sheep City"
date:   2017-04-19 11:38:10
categories: projects
excerpt: >
    A project to demonstrate different wireless network security schemes,
    potential attacks, and post-exploitation pivoting.
---
Sheep City
--

In fall 2016, IASG purchased materials for the Sheep City project. The project consists
of 3 small wireless routers and 3 Raspberry Pi 3s acting as wireless clients, as well as
an additional Pi to act as the "ISP". The project is a small scale model of a city street
that may have various wireless networks in play.

![Sheep City 1.0]({{ site.url }}/assets/sheep_city.jpg)

Each wireless network is different. The first network requires no authentication and does not
use encryption. This network is useful for experimenting with passive wireless sniffing in monitor
mode. The wireless traffic of one of the Pis can be intercepted and analyzed. This is effective for
demonstrating why unsecured wireless networks should not be used.

The second wireless network is secured with WEP ("Wired Equivalent Privacy"). WEP is an obsolete wireless
security scheme that can be compromised in a matter of minutes. This network is useful for learning
about attacking WEP networks and why they should not be used.

The third network is secured with WPA2 (Wi-Fi Protected Access), which is the modern standard for wireless
security in SOHO networks. However, with a weak key and a captured handshake, these networks may not be
perfectly secure either. This network allows for the Pi's 4-way handshake to be captured and used to
recover the network's pre-shared-key (PSK).

Sheep City is ultimately a work-in-progress, and we hope to add more wireless devices to it in the future.
This way, once a network is compromised, there are other devices to attack. The Raspberry Pis are also
capable of hosting vulnerable services.
