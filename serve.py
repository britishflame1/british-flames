"""Serveur de développement local : sert le dossier du site sans cache.

Le serveur intégré de Python laisse le navigateur garder d'anciennes copies des
fichiers, si bien qu'une modification peut ne pas apparaître. Ici, chaque réponse
demande au navigateur de toujours recharger la dernière version.

Lancement : py serve.py [port]   (port 4173 par défaut)
"""
import functools
import http.server
import os
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    root = os.path.dirname(os.path.abspath(__file__))
    handler = functools.partial(NoCacheHandler, directory=root)
    with http.server.ThreadingHTTPServer(("127.0.0.1", port), handler) as server:
        print(f"British Flames : http://localhost:{port}", flush=True)
        server.serve_forever()


if __name__ == "__main__":
    main()
