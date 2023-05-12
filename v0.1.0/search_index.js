var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = DifferentiableFrankWolfe","category":"page"},{"location":"#DifferentiableFrankWolfe","page":"Home","title":"DifferentiableFrankWolfe","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DifferentiableFrankWolfe.jl.","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#API-reference","page":"Home","title":"API reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DifferentiableFrankWolfe\nDiffFW\nsimplex_projection\nsimplex_projection_and_support\nForwardFW\nConditionsFW","category":"page"},{"location":"#DifferentiableFrankWolfe.DifferentiableFrankWolfe","page":"Home","title":"DifferentiableFrankWolfe.DifferentiableFrankWolfe","text":"DifferentiableFrankWolfe\n\nDifferentiable wrapper for FrankWolfe.jl convex optimization routines.\n\n\n\n\n\n","category":"module"},{"location":"#DifferentiableFrankWolfe.DiffFW","page":"Home","title":"DifferentiableFrankWolfe.DiffFW","text":"DiffFW{F,G,M,A,I}\n\nCallable parametrized wrapper for the Frank-Wolfe algorithm θ -> argmin_{x ∈ C} f(x, θ), which can be differentiated implicitly wrt θ.\n\nThe automatic differentiation backend must be compatible with ChainRules.jl (for instance Zygote.jl).\n\nReference: https://arxiv.org/abs/2105.15183 (section 2 + end of appendix A).\n\nFields\n\nf::F: function f(x, θ) to minimize wrt x\nf_grad1::G: gradient ∇ₓf(x, θ) of f wrt x\nlmo::M: linear minimization oracle θ -> argmin_{x ∈ C} θᵀx from [FrankWolfe.jl], implicitly defines the convex set C\nalg::A: optimization algorithm from FrankWolfe.jl\nimplicit::I: implicit function from ImplicitDifferentiation.jl\n\n\n\n\n\n","category":"type"},{"location":"#DifferentiableFrankWolfe.simplex_projection","page":"Home","title":"DifferentiableFrankWolfe.simplex_projection","text":"simplex_projection(z)\n\nCompute the Euclidean projection of the vector z onto the probability simplex.\n\nThis function is differentiable thanks to a custom chain rule.\n\nReference: https://arxiv.org/abs/1602.02068.\n\n\n\n\n\n","category":"function"},{"location":"#DifferentiableFrankWolfe.simplex_projection_and_support","page":"Home","title":"DifferentiableFrankWolfe.simplex_projection_and_support","text":"simplex_projection_and_support(z)\n\nCompute the Euclidean projection p of z on the probability simplex as well as the indicators s of its support, which are useful for differentiation.\n\nReference: https://arxiv.org/abs/1602.02068.\n\n\n\n\n\n","category":"function"},{"location":"#DifferentiableFrankWolfe.ForwardFW","page":"Home","title":"DifferentiableFrankWolfe.ForwardFW","text":"ForwardFW{F,G,M,A}\n\nUnderlying solver for DiffFW, which relies on a variant of Frank-Wolfe.\n\n\n\n\n\n","category":"type"},{"location":"#DifferentiableFrankWolfe.ConditionsFW","page":"Home","title":"DifferentiableFrankWolfe.ConditionsFW","text":"ConditionsFW{F,G,M}\n\nDifferentiable optimality conditions for DiffFW, which rely on a custom simplex_projection implementation.\n\n\n\n\n\n","category":"type"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"EditURL = \"https://github.com/gdalle/DifferentiableFrankWolfe.jl/blob/main/examples/tutorial.jl\"","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Necessary imports","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using DifferentiableFrankWolfe: DiffFW, simplex_projection\nusing FrankWolfe: UnitSimplexOracle\nusing Test: @test\nusing Zygote: jacobian","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Constructing the wrapper","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"f(x, θ) = 0.5 * sum(abs2, x - θ)  # minimizing the squared distance...\nf_grad1(x, θ) = x - θ\nlmo = UnitSimplexOracle(1.0)  # ... to the probability simplex\ndfw = DiffFW(f, f_grad1, lmo);  # ... is equivalent to a simplex projection\nnothing #hide","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Calling the wrapper","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"θ = rand(10)\nfrank_wolfe_kwargs = (max_iteration=100, epsilon=1e-4)\n\ny = dfw(θ; frank_wolfe_kwargs)\ny_true = simplex_projection(θ)\n@test Vector(y) ≈ Vector(y_true) atol = 1e-3","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Differentiating the wrapper","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"J = jacobian(_θ -> dfw(_θ; frank_wolfe_kwargs), θ)[1]\nJ_true = jacobian(simplex_projection, θ)[1]\n@test J ≈ J_true atol = 1e-3","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"This page was generated using Literate.jl.","category":"page"}]
}
