return {
  "nvim-telescope/telescope.nvim",
  branch = "0.1.x",
  dependencies = {
    "nvim-lua/plenary.nvim"
  },
  config = function()
    local keymap = vim.keymap
    keymap.set("n", "<leader>ff", "<cmd>lua require('telescope.builtin').find_files()<cr>")
    keymap.set("n", "<leader>fg", "<cmd>lua require('telescope.builtin').live_grep()<cr>")
  end,
}

