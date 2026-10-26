#!/usr/bin/env python3
"""
Reset Script — AI Bootcamp 2026 (Google Antigravity Workshop)
Restaura as pastas tracks/04-flappy-hero/ e tracks/05-radar-mcp-brasil/
para o seu estado inicial limpo (Blueprint Launchpad), removendo arquivos
gerados durante a sessão (SPEC_JOGO.md, game.js, app.js, style.css, etc.)
e restaurando os index.html originais via Git.
"""

import os
import shutil
import subprocess
import sys

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

GENERATED_FILES = [
    "tracks/04-flappy-hero/SPEC_JOGO.md",
    "tracks/04-flappy-hero/game.js",
    "tracks/04-flappy-hero/style.css",
    "tracks/04-flappy-hero/minha-selfie.png",
    "tracks/04-flappy-hero/hero-caricatura.png",
    "tracks/05-radar-mcp-brasil/app.js",
    "tracks/05-radar-mcp-brasil/style.css",
]

GENERATED_DIRS = [
    "workspaces-executivos",
]

BLUEPRINT_FILES = [
    "tracks/01-crisis-commander/index.html",
    "tracks/01-crisis-commander/style.css",
    "tracks/01-crisis-commander/game.js",
    "tracks/02-orbital-defense/index.html",
    "tracks/02-orbital-defense/style.css",
    "tracks/02-orbital-defense/game.js",
    "tracks/03-boardroom-simulator/index.html",
    "tracks/03-boardroom-simulator/style.css",
    "tracks/03-boardroom-simulator/app.js",
    "tracks/04-flappy-hero/index.html",
    "tracks/04-flappy-hero/selfie-studio.html",
    "tracks/05-radar-mcp-brasil/index.html",
]


def main() -> int:
    print("🔄 Restaurando o repositório para o estado inicial do Workshop (Blueprint Launchpad)...")
    removed = 0
    for rel_path in GENERATED_FILES:
        abs_path = os.path.join(ROOT_DIR, rel_path)
        if os.path.exists(abs_path):
            os.remove(abs_path)
            print(f"  🗑️ Removido: {rel_path}")
            removed += 1

    for rel_dir in GENERATED_DIRS:
        abs_dir = os.path.join(ROOT_DIR, rel_dir)
        if os.path.isdir(abs_dir):
            shutil.rmtree(abs_dir)
            print(f"  🗑️ Pasta removida: {rel_dir}/")
            removed += 1

    # Restore blueprint HTML files via git checkout if git is available
    try:
        subprocess.run(
            ["git", "checkout", "--"] + BLUEPRINT_FILES,
            cwd=ROOT_DIR,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        print("  ✨ Blueprints HTML restaurados via Git:")
        for bf in BLUEPRINT_FILES:
            print(f"     - {bf}")
    except Exception as exc:
        print(f"  ⚠️ Aviso ao restaurar via git checkout: {exc}")

    print(
        f"\n✅ Pronto! ({removed} arquivo(s) gerado(s) limpo(s)). "
        "As Trilhas 04 e 05 estão prontas para uma nova demonstração do zero!"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
