# Blackjack Trainer V2.4

Changes:
- Player numerical totals hidden during play.
- Dealer numerical total hidden during play.
- Final totals shown after the round.
- Decision feedback always explicitly shows the best play.
- No Continue button; Deal starts the next round as requested.
- Strategy decision accuracy and win/loss/push history retained.

Note: EV values remain provisional until the exact recursive EV engine is implemented.

V2.6: decision feedback persists until Deal; natural blackjack ends the round automatically and presents Deal as the only next-round action.

V2.8: Progressive Web App support added. Includes manifest.json, iPhone/iPad Apple web-app metadata, 192px/512px app icons, standalone display configuration, and a service worker for offline caching. Host over HTTPS, then use Safari > Share > Add to Home Screen.
